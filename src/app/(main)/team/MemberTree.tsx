'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import Tree, { CustomNodeElementProps, TreeNodeDatum } from "react-d3-tree";
import { Member } from "@/app/_types/Member";

const FALLBACK_IMAGE = "/team/not-found.jpg";

interface ExtendedTreeNodeDatum extends TreeNodeDatum {
  memberId?: string;
  imageUrl?: string;
  position?: string;
  children?: ExtendedTreeNodeDatum[];
}

interface TreeMeasurements {
  width: number;
  height: number;
  depth: number;
  leaves: number;
}

const memberName = (member: Member) =>
  `${member.firstName || ""} ${member.lastName || ""}`.trim();

const treeState = () => ({ id: "", depth: 0, collapsed: false });

const createMemberHierarchy = (members: Member[]): ExtendedTreeNodeDatum => {
  const validMembers = members.filter(
    (member) => member.id && member.firstName && member.lastName,
  );
  const memberById = new Map(validMembers.map((member) => [member.id, member]));
  const childrenByBigId = new Map<string, Member[]>();

  validMembers.forEach((member) => {
    if (!member.bigId || !memberById.has(member.bigId)) return;
    const children = childrenByBigId.get(member.bigId) ?? [];
    children.push(member);
    childrenByBigId.set(member.bigId, children);
  });

  const buildBranch = (member: Member, visited: Set<string>): ExtendedTreeNodeDatum => {
    if (visited.has(member.id)) {
      return { name: memberName(member), memberId: member.id, __rd3t: treeState() };
    }

    const nextVisited = new Set(visited).add(member.id);
    const children = (childrenByBigId.get(member.id) ?? [])
      .sort((a, b) => memberName(a).localeCompare(memberName(b)))
      .map((child) => buildBranch(child, nextVisited));

    return {
      name: memberName(member),
      memberId: member.id,
      imageUrl: member.imageUrl,
      position: member.position || "Member",
      children: children.length ? children : undefined,
      __rd3t: treeState(),
    };
  };

  const roots = validMembers
    .filter((member) => !member.bigId || !memberById.has(member.bigId))
    .filter((member) => childrenByBigId.has(member.id))
    .sort((a, b) => memberName(a).localeCompare(memberName(b)))
    .map((member) => buildBranch(member, new Set()));

  return {
    name: "PlexTech",
    children: roots,
    __rd3t: treeState(),
  };
};

const measureTree = (root: ExtendedTreeNodeDatum): TreeMeasurements => {
  let maxDepth = 0;
  let leafCount = 0;

  const visit = (node: ExtendedTreeNodeDatum, depth: number) => {
    maxDepth = Math.max(maxDepth, depth);
    if (!node.children?.length) {
      leafCount += 1;
      return;
    }
    node.children.forEach((child) => visit(child, depth + 1));
  };

  visit(root, 0);

  return {
    width: Math.max(1200, leafCount * 190),
    height: Math.max(620, maxDepth * 190 + 220),
    depth: maxDepth,
    leaves: leafCount,
  };
};

const renderTreeNode = ({ nodeDatum }: CustomNodeElementProps, focusedMemberId: string | null) => {
  const node = nodeDatum as ExtendedTreeNodeDatum;
  const isRoot = !node.memberId;
  const isFocused = node.memberId === focusedMemberId;

  if (isRoot) {
    return (
      <g>
        <circle r={43} fill="white" stroke="#e2e8f0" strokeWidth={1.5} className="drop-shadow-sm" />
        <image
          href="/plextech-logo.webp"
          x={-31}
          y={-31}
          width={62}
          height={62}
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    );
  }

  const labelWidth = Math.max(118, Math.min(184, node.name.length * 7.5 + 24));

  return (
    <g data-member-id={node.memberId}>
      {isFocused && <circle r={43} fill="#fff7ed" stroke="#fb923c" strokeWidth={3} />}
      <circle
        r={35}
        fill="#fff"
        stroke={isFocused ? "#fb923c" : "#f1f5f9"}
        strokeWidth={isFocused ? 4 : 5}
        className="drop-shadow-sm"
      />
      <image
        href={node.imageUrl || FALLBACK_IMAGE}
        x={-31}
        y={-31}
        width={62}
        height={62}
        preserveAspectRatio="xMidYMid slice"
        clipPath="circle(31px at center)"
        onError={(event) => {
          event.currentTarget.setAttribute("href", FALLBACK_IMAGE);
        }}
      />
      <rect
        x={-labelWidth / 2}
        y={44}
        width={labelWidth}
        height={46}
        rx={13}
        fill="white"
        stroke={isFocused ? "#fb923c" : "#e2e8f0"}
        strokeWidth={1.5}
      />
      <text
        x={0}
        y={61}
        textAnchor="middle"
        fill="#1e293b"
        fontSize={13}
        fontWeight={400}
      >
        {node.name.length > 23 ? `${node.name.slice(0, 21)}…` : node.name}
      </text>
      <text x={0} y={77} textAnchor="middle" fill="#94a3b8" fontSize={9.5}>
        {(node.position || "Member").length > 28
          ? `${(node.position || "Member").slice(0, 26)}…`
          : node.position || "Member"}
      </text>
    </g>
  );
};

const MemberTree: React.FC<{ members: Member[] }> = ({ members }) => {
  const [isClient, setIsClient] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const hierarchy = useMemo(() => createMemberHierarchy(members), [members]);
  const measurements = useMemo(() => measureTree(hierarchy), [hierarchy]);
  const fitZoom = useMemo(
    () => Math.max(0.12, Math.min(0.42, 1000 / (measurements.leaves * 185))),
    [measurements.leaves],
  );
  const initialTranslate = useMemo(
    () => ({ x: measurements.width / 2, y: 70 }),
    [measurements.width],
  );
  const [zoom, setZoom] = useState(fitZoom);
  const [treeTranslate, setTreeTranslate] = useState(initialTranslate);
  const [treeKey, setTreeKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [focusedMemberId, setFocusedMemberId] = useState<string | null>(null);
  const interactionRef = useRef({ zoom: fitZoom, translate: initialTranslate });
  const searchableMembers = useMemo(() => {
    const visibleMemberIds = new Set<string>();
    const collectIds = (node: ExtendedTreeNodeDatum) => {
      if (node.memberId) visibleMemberIds.add(node.memberId);
      node.children?.forEach(collectIds);
    };
    collectIds(hierarchy);

    return members
      .filter((member) => visibleMemberIds.has(member.id))
      .sort((a, b) => memberName(a).localeCompare(memberName(b)));
  }, [hierarchy, members]);
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return searchableMembers.slice(0, 8);
    return searchableMembers
      .filter((member) => memberName(member).toLowerCase().includes(query))
      .slice(0, 8);
  }, [searchQuery, searchableMembers]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const frame = window.requestAnimationFrame(() => {
      container.scrollLeft = Math.max(0, (container.scrollWidth - container.clientWidth) / 2);
      container.scrollTop = 0;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isClient, measurements.width]);

  useEffect(() => {
    setZoom(fitZoom);
    setTreeTranslate(initialTranslate);
    interactionRef.current = { zoom: fitZoom, translate: initialTranslate };
  }, [fitZoom, initialTranslate]);

  const setZoomLevel = (nextZoom: number) => {
    const constrainedZoom = Math.max(0.08, Math.min(1.5, nextZoom));
    setTreeTranslate(interactionRef.current.translate);
    setZoom(constrainedZoom);
    interactionRef.current.zoom = constrainedZoom;
  };

  const resetView = () => {
    setTreeTranslate(initialTranslate);
    setZoom(fitZoom);
    setTreeKey((current) => current + 1);
    setFocusedMemberId(null);
    setSearchQuery("");
    setSearchOpen(false);
    interactionRef.current = { zoom: fitZoom, translate: initialTranslate };

    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft = Math.max(0, (container.scrollWidth - container.clientWidth) / 2);
      container.scrollTop = 0;
    }
  };

  const focusMember = (member: Member) => {
    setFocusedMemberId(member.id);
    setSearchQuery(memberName(member));
    setSearchOpen(false);

    window.requestAnimationFrame(() => {
      const memberNodes = Array.from(
        document.querySelectorAll<SVGGElement>("[data-member-id]"),
      );
      const memberNode = memberNodes.find((node) => node.dataset.memberId === member.id);
      const nodeTransform = memberNode?.parentElement?.getAttribute("transform");
      const coordinates = nodeTransform?.match(/translate\(([-\d.]+)[, ]+([-\d.]+)\)/);
      const container = scrollContainerRef.current;
      if (!coordinates || !container) return;

      const nodeX = Number(coordinates[1]);
      const nodeY = Number(coordinates[2]);
      const focusZoom = 0.55;
      const targetX = container.scrollLeft + container.clientWidth / 2;
      const targetY = container.scrollTop + Math.min(container.clientHeight * 0.42, 300);
      const nextTranslate = {
        x: targetX - nodeX * focusZoom,
        y: targetY - nodeY * focusZoom,
      };

      setTreeTranslate(nextTranslate);
      setZoom(focusZoom);
      interactionRef.current = { zoom: focusZoom, translate: nextTranslate };
    });
  };

  if (!isClient) return null;

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="relative">
        <div className="absolute left-4 top-4 z-30 w-[min(280px,calc(100%-176px))]">
          <label className="relative block">
            <span className="sr-only">Find a member in the family tree</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && searchResults[0]) {
                  event.preventDefault();
                  focusMember(searchResults[0]);
                }
                if (event.key === "Escape") setSearchOpen(false);
              }}
              placeholder="Find someone…"
              className="h-10 w-full rounded-xl border border-slate-200 bg-white/95 pl-10 pr-3 text-sm font-normal text-slate-800 shadow-md outline-none backdrop-blur transition placeholder:text-slate-400 focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
            />
          </label>

          {searchOpen && (
            <div className="mt-2 max-h-72 overflow-y-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
              {searchResults.length ? (
                searchResults.map((member) => (
                  <button
                    key={member.id}
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => focusMember(member)}
                    className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-orange-50 focus:bg-orange-50 focus:outline-none"
                  >
                    <span className="truncate text-sm font-normal text-slate-800">{memberName(member)}</span>
                    <span className="shrink-0 truncate text-[10px] font-normal text-slate-400">
                      {member.position || "Member"}
                    </span>
                  </button>
                ))
              ) : (
                <p className="px-3 py-3 text-sm font-normal text-slate-500">No matching member</p>
              )}
            </div>
          )}
        </div>

        <div className="absolute right-4 top-4 z-20 flex items-center overflow-hidden rounded-xl border border-slate-200 bg-white/95 shadow-md backdrop-blur">
          <button
            type="button"
            aria-label="Zoom out"
            title="Zoom out"
            onClick={() => setZoomLevel(interactionRef.current.zoom - 0.1)}
            className="flex h-10 w-10 items-center justify-center text-xl font-normal text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            −
          </button>
          <button
            type="button"
            aria-label="Fit entire tree"
            title="Fit entire tree"
            onClick={resetView}
            className="h-10 border-x border-slate-200 px-3 text-xs font-normal text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Fit
          </button>
          <button
            type="button"
            aria-label="Zoom in"
            title="Zoom in"
            onClick={() => setZoomLevel(interactionRef.current.zoom + 0.1)}
            className="flex h-10 w-10 items-center justify-center text-xl font-normal text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            +
          </button>
        </div>

        <div
          ref={scrollContainerRef}
          className="member-tree-scroll overflow-auto rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div
            className="member-tree-canvas relative"
            style={{ width: measurements.width, height: measurements.height }}
          >
            <Tree
              key={treeKey}
              data={hierarchy}
              renderCustomNodeElement={(props) => renderTreeNode(props, focusedMemberId)}
              orientation="vertical"
              translate={treeTranslate}
              pathFunc="step"
              collapsible={false}
              draggable={true}
              zoomable={true}
              zoom={zoom}
              scaleExtent={{ min: 0.08, max: 1.5 }}
              onUpdate={({ zoom: updatedZoom, translate }) => {
                interactionRef.current = { zoom: updatedZoom, translate };
              }}
              depthFactor={185}
              nodeSize={{ x: 185, y: 185 }}
              separation={{ siblings: 1, nonSiblings: 1.2 }}
              pathClassFunc={() => "plex-family-link"}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .member-tree-scroll {
          max-height: min(78vh, 860px);
          overscroll-behavior: contain;
          scrollbar-color: #cbd5e1 #f8fafc;
        }

        .member-tree-canvas {
          background-color: #fcfcfd;
          background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .member-tree-canvas :global(.plex-family-link) {
          fill: none;
          stroke: #cbd5e1;
          stroke-width: 2px;
        }

        .member-tree-canvas :global(text) {
          font-weight: 400 !important;
          stroke: none;
        }
      `}</style>
    </div>
  );
};

export default MemberTree;

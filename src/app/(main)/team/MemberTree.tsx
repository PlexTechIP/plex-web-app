import { useEffect, useRef, useState } from 'react';
import { CustomNodeElementProps, TreeNodeDatum } from "react-d3-tree";
import Tree from "react-d3-tree";
import { Member } from "@/app/_types/Member";

const createMemberHierarchy = (members: Member[]): ExtendedTreeNodeDatum[] => {
  const memberMap: Record<string, Member> = {};

  members.forEach((member) => {
    memberMap[member.id] = member;
  });

  const buildTree = (member: Member): ExtendedTreeNodeDatum | null => {
    if (!member.firstName || !member.lastName) {
      return null;
    }

    const children = members.filter(m => m.bigId === member.id);
    if (children.length === 0 && !member.bigId) {
      return null;
    }

    const childrenNodes = children.map(child => buildTree(child)).filter(child => child !== null);

    return {
      name: `${member.firstName} ${member.lastName}`,
      value: `${member.firstName} ${member.lastName}`,
      imageUrl: member.imageUrl,
      children: childrenNodes.length > 0 ? childrenNodes : undefined,
      firstName: member.firstName,
      lastName: member.lastName,
      __rd3t: {
        id: "",
        depth: 0,
        collapsed: false
      },
    };
  };

  const rootNode: ExtendedTreeNodeDatum = {
    name: "PlexTech Members",
    value: "PlexTech Members",
    children: [],
    firstName: "",
    lastName: "",
    __rd3t: {
      id: "",
      depth: 0,
      collapsed: false
    }
  };

  members.forEach(member => {
    if (!member.bigId) {
      const memberNode = buildTree(member);
      if (memberNode) {
        rootNode.children?.push(memberNode);
      }
    }
  });

  return [rootNode];
};

const createNameToImageMap = (members: Member[]): Record<string, string> => {
  return members.reduce((map, member) => {
    if (member.firstName && member.lastName && member.imageUrl) {
      map[`${member.firstName} ${member.lastName}`] = member.imageUrl;
    }
    return map;
  }, {} as Record<string, string>);
};

interface ExtendedTreeNodeDatum extends TreeNodeDatum {
  firstName: string;
  lastName: string;
  imageUrl?: string;
  children?: ExtendedTreeNodeDatum[];
  value?: string;
}

const renderRectSvgNode = (props: CustomNodeElementProps) => {
  const { nodeDatum } = props;
  const { imageUrl, firstName, lastName } = nodeDatum as ExtendedTreeNodeDatum;
  const fullName = `${firstName} ${lastName}`;
  const isRootNode = fullName === " " || fullName === "PlexTech Members";

  if (isRootNode) {
    return (
      <g>
        <rect
          width={180}
          height={50}
          x={-90}
          y={-25}
          fill="url(#gradient)"
          rx={25}
          stroke="#E5E7EB"
          strokeWidth={2}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <text
          fill="#FFFFFF"
          fontWeight="500"
          fontSize="16px"
          textAnchor="middle"
          dy={5}
        >
          {nodeDatum.name}
        </text>
      </g>
    );
  }

  return (
    <g onClick={props.toggleNode} style={{ cursor: 'pointer' }}>
      {/* Outer ring for depth */}
      <circle r={32} fill="#F3F4F6" />

      {/* White background */}
      <circle r={30} fill="#FFFFFF" stroke="#E5E7EB" strokeWidth={2} />

      {/* Profile image */}
      <image
        href={imageUrl || "/plextech-logo.webp"}
        x={-26}
        y={-26}
        height={52}
        width={52}
        clipPath="url(#circleClip)"
      />
      <clipPath id="circleClip">
        <circle r={26} cx={0} cy={0} />
      </clipPath>

      {/* Name label background */}
      <rect
        width={Math.max(fullName.length * 8, 100)}
        height={28}
        x={40}
        y={-14}
        fill="#FFFFFF"
        rx={14}
        stroke="#E5E7EB"
        strokeWidth={1.5}
      />

      {/* Name text */}
      <text
        fill="#1F2937"
        fontWeight="400"
        fontSize="14px"
        x={40 + Math.max(fullName.length * 8, 100) / 2}
        textAnchor="middle"
        dy={5}
      >
        {fullName}
      </text>

      {/* Indicator for expandable nodes */}
      {nodeDatum.children && nodeDatum.children.length > 0 && (
        <circle
          r={8}
          cy={36}
          fill="#FB923C"
          stroke="#FFFFFF"
          strokeWidth={2}
        />
      )}
    </g>
  );
};

const MemberTree: React.FC<{ members: Member[] }> = ({ members }) => {
  const [isClient, setIsClient] = useState(false);
  const [treeTranslate, setTreeTranslate] = useState({ x: 0, y: 0 });
  const treeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    if (treeContainerRef.current) {
      const dimensions = treeContainerRef.current.getBoundingClientRect();
      setTreeTranslate({
        x: dimensions.width / 2,
        y: dimensions.height / 2,
      });
    }
  }, [members]);

  if (!isClient) {
    return null;
  }

  const memberHierarchy = createMemberHierarchy(members);
  const nameToImageMap = createNameToImageMap(members);

  memberHierarchy.forEach(node => {
    node.imageUrl = nameToImageMap[`${node.firstName} ${node.lastName}`];
  });

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Instructions */}
      <div className="mb-4 p-4 bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg border border-orange-100">
        <p className="text-sm text-gray-700 text-center">
          <span className="font-semibold">Interactive Tree:</span> Click and drag to pan • Scroll to zoom • Click nodes to expand/collapse
        </p>
      </div>

      {/* Tree Container */}
      <div
        ref={treeContainerRef}
        className="relative rounded-xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-sm overflow-hidden member-tree-container"
        style={{ height: "700px" }}
      >
        <Tree
          data={memberHierarchy}
          renderCustomNodeElement={renderRectSvgNode}
          orientation="vertical"
          translate={treeTranslate}
          pathFunc="step"
          collapsible={true}
          depthFactor={120}
          nodeSize={{ x: 220, y: 180 }}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
          zoom={0.8}
          scaleExtent={{ min: 0.3, max: 2 }}
          enableLegacyTransitions={true}
          pathClassFunc={() => 'custom-tree-link'}
        />
      </div>

      <style jsx>{`
        .member-tree-container :global(.custom-tree-link) {
          stroke: #D1D5DB;
          stroke-width: 2px;
          fill: none;
        }

        .member-tree-container :global(.custom-tree-link:hover) {
          stroke: #FB923C;
          stroke-width: 3px;
        }
      `}</style>
    </div>
  );
};

export default MemberTree;

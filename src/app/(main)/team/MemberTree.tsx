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

  return (
    <g onClick={props.toggleNode}>
      <circle r={27} fill="#FFFFFF" />
      <image
        href={imageUrl || "/plextech-logo.webp"}
        x={-25}
        y={-25}
        height={50}
        width={50}
        clipPath="url(#circleClip)"
      />
      <clipPath id="circleClip">
        <circle r={25} cx={0} cy={0} />
      </clipPath>
      <text
        fill="#000000"
        fontWeight="lighter"
        fontSize="18px"
        x={35}
        dy={5}
      >
        {fullName}
      </text>
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
    <div ref={treeContainerRef} style={{ height: "100vh", backgroundColor: "#FFFFFF" }}>
      <Tree
        data={memberHierarchy}
        renderCustomNodeElement={renderRectSvgNode}
        orientation="vertical"
        translate={treeTranslate}
        pathFunc="step"
        collapsible={true}
        depthFactor={100}
        nodeSize={{ x: 200, y: 200 }}
      />
    </div>
  );
};

export default MemberTree;

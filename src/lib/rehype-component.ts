import path from "path";
import fs from "fs";
import { visit } from "unist-util-visit";
import { u } from "unist-builder";

import { demos } from "@/docs/components";
import { UnistNode, UnistTree } from "@/types/unist";


interface Position {
    start: Start;
    end: Start;
}

interface Start {
    line: number;
    column: number;
    offset: number;
}

interface Child {
    type: string;
    value?: string;
    data?: [];
    position?: [];
    depth?: number;
    children?: [];
    name?: string;
    attributes?: [];
    lang?: string;
    meta?: null;
    ordered?: boolean;
    start?: null;
    spread?: boolean;
}

interface Attribute {
    type: string;
    name: string;
    value: string;
    position: Position;
}

interface RootObject {
    type: string;
    children: Child[];
    position: Position;
    attributes: Attribute[];
}

interface RehypeComponentTree {
    type: string
    tagName: string
    properties: {
        className: string
    }
    children: RehypeComponentTree[]
    attributes: Attribute[]
    name: string
    component: string
    code: string
}

export function rehypeComponent() {
    return async (tree: UnistTree) => {
        visit(tree, (node: UnistNode) => {
            if (node.name === "ComponentPreview") {
                const name = getNodeAttributeByName(node, "name")?.value as string
                if (!name) {
                    return null
                }

                try {
                    const component = demos[name]
                    const filePath = path.join(process.cwd(), 'src', component.file)
                    const content = fs.readFileSync(filePath, "utf8")

                    node.children?.push(
                        u("element", {
                            tagName: "pre",
                            properties: {
                                __src__: component.file,
                            },
                            children: [
                                u("element", {
                                    tagName: "code",
                                    properties: {
                                        className: ["language-tsx"],
                                    },
                                    data: {
                                        meta: `event="copy_usage_code"`,
                                    },
                                    children: [
                                        {
                                            type: "text",
                                            value: content,
                                        },
                                    ],
                                }),
                            ],
                        }),
                    );

                    // return content
                } catch (error) {
                    return null
                }

            }
        })
    }
}

function getNodeAttributeByName(node: UnistNode, name: string) {
    return node.attributes?.find((attribute) => attribute.name === name);
}
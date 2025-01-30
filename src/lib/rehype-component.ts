import path from "path";
import fs from "fs";
import { visit } from "unist-util-visit";
import { u } from "unist-builder";

import { demos } from "@/docs/components";
import { UnistNode, UnistTree } from "@/types/unist";

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
                // eslint-disable-next-line  @typescript-eslint/no-unused-vars
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
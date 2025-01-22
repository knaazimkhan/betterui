"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { demos } from "@/docs/components"
import React, { useMemo } from "react"

interface ComponentPreviewProps {
    name: string
    children: React.ReactNode
}

export function ComponentPreview({ name, children }: ComponentPreviewProps) {
    console.log("children", children)
    const Codes = React.Children.toArray(children) as React.ReactElement[];
    const code = Codes[0];

    const demo = useMemo(() => {
        const demo = demos[name]
        if (!demo) {
            return <div>Preview of {name} not found.</div>
        }
        const Component = demo.component
        return <Component />
    }, [name])

    // const code = useMemo(() => getCode(name), [name])

    return (
        <Tabs defaultValue="preview" className="w-full">
            <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
                <Card>
                    <CardContent className="space-y-2">
                        {demo}
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="code">
                <Card>
                    <CardContent>
                        <div className="flex flex-col space-y-4">
                            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                                {code}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>

    )
}   
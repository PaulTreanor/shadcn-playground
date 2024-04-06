import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

const IndexPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  return (
    <Button
      variant="outline"
      onClick={() => {
        console.log("Button clicked");
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      }}
    >
      Show Toast
    </Button>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

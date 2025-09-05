import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";

export default function ProjectDialog (
  { title, children }:
    { title: string; children: ReactNode; }
) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant='secondary' className="w-fit mx-auto">View more</Button>
      </DialogTrigger>
      <DialogContent>
        <ScrollArea className="h-[80vh] max-w-[800px] w-full mx-auto rounded-md px-0 sm:px-4 py-8">
          <DialogHeader>
            <DialogTitle className="!text-4xl pb-6">{title}</DialogTitle>
          </DialogHeader>
          {children}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
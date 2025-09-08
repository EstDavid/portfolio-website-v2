import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { contactFormText } from "@/lib/data/contact";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";

type ContactDialogProps = {
  name: string;
  error: string;
} & React.ComponentProps<typeof DialogPrimitive.Root>;

export default function ContactDialog (
  { name, error, ...props }:
    ContactDialogProps
) {
  if (!name) {
    return null;
  }

  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          {error.length ?
            <DialogTitle className="!text-large pb-6">{contactFormText.thereWasError}</DialogTitle>
            :
            <DialogTitle className="!text-large pb-6 flex gap-2">
              <p>{`${contactFormText.thankYou}`}</p>
              <p className="text-primary">{`${name}`}</p>
            </DialogTitle>
          }
        </DialogHeader>
        {error.length ?
          <p>{error}</p>
          :
          <div className="flex flex-col gap-2">
            <p>{contactFormText.messageSent}</p>
            <p className="text-small text-neutral-600">{contactFormText.autoReply}</p>
          </div>
        }
      </DialogContent>
    </Dialog>
  );
}
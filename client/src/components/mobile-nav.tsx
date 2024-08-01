import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-6 w-6 text-orange-500" />
      </SheetTrigger>
      <SheetContent className="spce-y-4">
        <SheetTitle>
          <span>Welcome to MernEats.com!</span>
        </SheetTitle>

        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-orange-500">Login</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

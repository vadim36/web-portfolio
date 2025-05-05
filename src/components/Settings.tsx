import { Label, PopoverTrigger, Switch, PopoverContent, Popover, ThemeContext } from "@/shared";
import { useContext } from "react";
import { Settings as SettingsIcon } from 'lucide-react';

export function Settings() {
  const {dark, toggleDark} = useContext(ThemeContext);

  return (
    <Popover>
      <PopoverTrigger className="border rounded-3xl fixed bottom-5 md:top-5 md:bottom-auto p-2 flex gap-2 bg-background cursor-pointer">
        <SettingsIcon/>
      </PopoverTrigger>
      <PopoverContent className={`flex gap-2 ${dark && "dark"}`}>
        <Switch
          id="themeSwitcher"
          checked={dark}
          onCheckedChange={toggleDark}
        />
        <Label htmlFor="themeSwitcher">Темная тема</Label>
      </PopoverContent>
    </Popover>
  );
}

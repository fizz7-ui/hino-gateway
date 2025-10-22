import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Search, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const languages = [
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "bn", name: "Bengali", flag: "🇧🇩" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "nl", name: "Dutch", flag: "🇳🇱" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "ms", name: "Malay", flag: "🇲🇾" },
  { code: "pl", name: "Polish", flag: "🇵🇱" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "th", name: "Thai", flag: "🇹🇭" },
  { code: "tr", name: "Turkish", flag: "🇹🇷" },
  { code: "ur", name: "Urdu", flag: "🇵🇰" },
  { code: "vi", name: "Vietnamese", flag: "🇻🇳" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  
  const currentLanguage = useMemo(
    () => languages.find((lang) => lang.code === i18n.language) || languages[4],
    [i18n.language]
  );

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-auto gap-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant animate-fade-in"
        >
          <span className="text-2xl">{currentLanguage.flag}</span>
          <Globe className="h-4 w-4 opacity-70" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-[280px] p-0 bg-background/95 backdrop-blur-lg border-border shadow-elegant animate-scale-in" 
        align="end"
      >
        <Command className="bg-transparent">
          <div className="flex items-center border-b border-border px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput 
              placeholder="Search languages..." 
              className="border-0 focus:ring-0"
            />
          </div>
          <CommandList className="max-h-[300px] overflow-y-auto">
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.code}
                  value={language.name}
                  onSelect={() => handleLanguageChange(language.code)}
                  className="flex items-center gap-3 cursor-pointer hover:bg-accent/50 transition-all duration-200"
                >
                  <span className="text-2xl w-8 h-8 flex items-center justify-center rounded-full bg-muted">
                    {language.flag}
                  </span>
                  <span className="flex-1 font-medium">{language.name}</span>
                  <Check
                    className={cn(
                      "h-4 w-4 text-primary",
                      currentLanguage.code === language.code
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;

import { useState } from 'react';
import Image from 'next/image';

export const LanguageSwitcher = () => {
    type LanguageKey = "English" | "Français";
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageKey>('English');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const languages: Record<LanguageKey, { name: string; flag: string }> = {
        English: {
            name: "English",
            flag: "/imgs/usa.png"
        },
        Français: {
            name: "Français",
            flag: "/imgs/France.png"
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLanguageChange = (language: LanguageKey) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="relative ">
            <button
                className="flex my-5 md:my:0 items-center space-x-2 text-sm whitespace-nowrap"
                onClick={toggleDropdown}
            >
                <img
                    src={"/imgs/drop.png"}
                    alt={`Dropdown icon`}
                    width={20}
                    height={20}
                />
                <Image
                    src={languages[selectedLanguage].flag}
                    alt={`${selectedLanguage} Flag`}
                    width={30}
                    height={30}
                />
                <span className="inline">{languages[selectedLanguage].name}</span>
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
                <div className="absolute z-20 mt-2 min-w-[8rem] bg-white border border-gray-200 rounded shadow-lg">
                    {Object.entries(languages).map(([key, { name, flag }]) => (
                        <button
                            key={key}
                            onClick={() => handleLanguageChange(key as LanguageKey)}
                            className="flex items-center gap-6 w-full px-2 py-1 text-sm hover:bg-gray-100 whitespace-nowrap"
                        >
                            <Image
                                src={flag}
                                alt={`${name} Flag`}
                                width={20}
                                height={20}
                                className="rounded mr-2"
                            />
                            <span className="text-black">{name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

import { useAuth } from "@/app/context/AuthContext";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface MobileMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface MobileNavigation {
  menutItems: Array<{
    id: string;
    label: string;
    route: string;
  }>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenu) {
  return (
    <button
      className="md:hidden p-2 text-gray-600 hover:text-gray-900"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}

export default function MobileNavigation({
  menutItems,
  setIsOpen,
}: MobileNavigation) {
  const { currentUser } = useAuth();
  const pathname = usePathname();
  return (
    <div className="md:hidden py-4 border-t border-gray-100">
      <div className="space-y-2">
        {menutItems.map((item) => (
          <Link
            key={item.id}
            href={item.route}
            onClick={() => {
              setIsOpen(false);
            }}
            className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              pathname === item.route
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            }`}
          >
            {item.label}
          </Link>
        ))}

        {currentUser && (
          <div className="pt-4 border-t border-gray-100 mt-4">
            <div className="flex items-center space-x-3 px-3 py-2">
              <img
                src={
                  currentUser.avatar ||
                  `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop`
                }
                alt={currentUser.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-gray-700">
                {currentUser.name}
              </span>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm text-gray-500 hover:text-gray-700"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

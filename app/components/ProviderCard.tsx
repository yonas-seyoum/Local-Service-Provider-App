import { Star, MapPin } from "lucide-react";

interface ProviderCardProps {
  provider: any;
  onSelect?: (provider: any) => void;
}

export default function ProviderCard({
  provider,
  onSelect,
}: ProviderCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 cursor-pointer group"
      onClick={() => onSelect?.(provider)}
    >
      <div className="flex items-start space-x-4">
        <img
          src={
            provider?.avatar ||
            `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop`
          }
          alt={provider?.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {provider?.name}
          </h3>

          <div className="flex items-center space-x-1 mt-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">
              {provider?.rating}
            </span>
            <span className="text-sm text-gray-500">
              ({provider?.totalReviews} reviews)
            </span>
          </div>

          <div className="flex items-center space-x-1 mt-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{provider?.location}</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {provider?.skills.slice(0, 2).map((skill: any, index: any) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {skill}
              </span>
            ))}
            {provider?.skills.length > 2 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                +{provider?.skills.length - 2} more
              </span>
            )}
          </div>
        </div>

        <div className="text-right">
          <div className="text-lg font-semibold text-gray-900">
            ${provider?.hourlyRate}/hr
          </div>
          <div className="text-sm text-gray-500">hourly rate</div>
        </div>
      </div>
    </div>
  );
}

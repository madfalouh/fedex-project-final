// DashboardStatCard.js

const DashboardStatCard = ({ title, value, icon, bgColorClassName }) => {
  return (
    <div className={`shadow-lg rounded-lg overflow-hidden ${bgColorClassName} h-40 `}> {/* Adjust `h-32` as needed */}
      <div className="flex items-center justify-between p-4 h-full">
        <div>
          <div className="text-sm font-semibold text-gray-600 dark:text-gray-200">{title}</div>
          <div className="text-3xl">{value}</div>
        </div>
        <div>
          {/* Placeholder for the icon, replace with actual icon component */}
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashboardStatCard;

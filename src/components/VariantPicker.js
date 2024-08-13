const VariantPicker = ({ variants, ...props }) => {
  if (variants.length === (0 || 1)) return null;

  return (
    <select
      {...props}
      className="appearance-none w-full mb-3 sm:mb-0 flex-grow sm:mr-3 pl-3 py-2 bg-gray-800 border border-gray-700 text-gray-300 focus:border-cyan-500 focus:text-cyan-300 shadow-md rounded-lg transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
    >
      {variants.map(({ external_id, name }) => (
        <option key={external_id} value={external_id} className="bg-gray-900 text-gray-300">
          {name}
        </option>
      ))}
    </select>
  );
};

export default VariantPicker;

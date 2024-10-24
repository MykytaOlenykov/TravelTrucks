export function formatCampersSearchParams({
  vehicleEquipments,
  vehicleTypes,
  location,
}) {
  const searchParams = {};

  if (location) {
    searchParams.location = location;
  }

  const vehicleType = vehicleTypes.find(({ selected }) => selected);

  if (vehicleType) {
    searchParams[vehicleType.field] = vehicleType.value;
  }

  for (const { value, field, selected } of vehicleEquipments) {
    if (!selected) continue;
    searchParams[field] = value;
  }

  return searchParams;
}

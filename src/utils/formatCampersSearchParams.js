export function formatCampersSearchParams({
  vehicleEquipments,
  vehicleTypes,
  location,
}) {
  const searchParams = {};

  if (location) {
    searchParams.location = location;
  }

  for (const { value, field, selected } of vehicleEquipments) {
    if (!selected) continue;
    searchParams[field] = value;
  }

  for (const { value, field, selected } of vehicleTypes) {
    if (!selected) continue;
    searchParams[field] = searchParams[field]
      ? `${searchParams[field]}|${value}`
      : value;
  }

  return searchParams;
}

export function create({ request, response }) {
  const { equipment, description, user_name } = request.body;

  const ticket = {
    equipment,
    description,
    user_name,
  };

  return response.end(JSON.stringify(ticket));
}

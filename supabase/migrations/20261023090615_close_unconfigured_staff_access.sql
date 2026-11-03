/*
# Close unconfigured staff access

1. Security Changes
- Remove SELECT and UPDATE privileges from the authenticated role on `appointments` and `contact_messages`.
- Keep only INSERT for the public forms until an authenticated administrator role and server-enforced staff membership check are configured.

2. Important Notes
- This prevents any generic signed-in account from accessing patient information.
- The admin area remains a safe visual workspace until clinic staff authentication is explicitly connected.
*/

REVOKE SELECT, UPDATE ON public.appointments FROM authenticated;
REVOKE SELECT, UPDATE ON public.contact_messages FROM authenticated;

/*
# Tighten public form grants

1. Security Changes
- Remove implicit Data API read, update, and delete privileges from anonymous visitors on `appointments` and `contact_messages`.
- Remove broad authenticated delete privileges so submitted patient records cannot be deleted through the client.
- Keep anonymous INSERT available for the public booking and contact forms.

2. Important Notes
- Patient-submitted records are now submit-only for the public website.
- Staff management access must be granted through a future authenticated admin role workflow rather than broad default table privileges.
*/

REVOKE SELECT, UPDATE, DELETE ON public.appointments FROM anon;
REVOKE DELETE ON public.appointments FROM authenticated;
REVOKE SELECT, UPDATE, DELETE ON public.contact_messages FROM anon;
REVOKE DELETE ON public.contact_messages FROM authenticated;

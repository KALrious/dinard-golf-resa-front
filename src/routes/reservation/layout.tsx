import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$, z } from "@builder.io/qwik-city";
import type { InitialValues } from "@modular-forms/qwik";
import Navigation from "~/components/navigation/navigation";

export const bookingSchema = z.object({
  date: z.string(),
  // players: z
  //   .object({
  //     name: z.string(),
  //     userId: z.string(),
  //   })
  //   .array(),
});

export type BookingForm = z.infer<typeof bookingSchema>;

export const useBookingLoader = routeLoader$<InitialValues<BookingForm>>(
  () => ({
    date: new Date().toISOString().split("T")[0],
    // players: [{ name: "jean", userId: "664" }],
  })
);

export default component$(() => {
  return (
    <>
      <main class="w-[100vw] h-[100vh] overflow-hidden bg-[#FAFAFA]">
        <Navigation />
        <Slot />
      </main>
    </>
  );
});

import { component$ } from "@builder.io/qwik";
import ReservationButton from "~/components/golf/reservation-button/reservation-button";
import Reservation from "~/components/golf/reservation/reservation";
import Typography from "~/components/typography/typography";
import { golfResa } from "~/mock-data/golf-resa";

export default component$(() => {
  return (
    <div>
      <Typography component="h1">
        Réserve Ta prochaine partie de Golf:
      </Typography>
      <Reservation reservations={golfResa} />
      <ReservationButton />
    </div>
  );
});

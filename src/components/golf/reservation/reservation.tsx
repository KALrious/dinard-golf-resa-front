import { component$ } from "@builder.io/qwik";
import styles from "./reservation.module.css";
import Typography from "~/components/typography/typography";

type Player = {
  id: number;
  firstName: string;
  lastName: string;
  handicap?: number;
};

type Reservation = {
  id: number;
  date: string;
  time: string;
  players: Player[];
};

type ReservationProps = {
  reservations: Reservation[];
};

export default component$<ReservationProps>(({ reservations }) => {
  return (
    <div class={styles.resa}>
      {reservations.map((resa, index) => (
        <div class={styles.resaContainer} key={`resa_${index}`}>
          <div class={styles.borderTop} />
          <div class={styles.resaInfo}>
            <Typography component="span">
              {resa.date} - {resa.time}
            </Typography>
            <ul class={styles.listContainer}>
              {resa.players.map((player) => (
                <li key={`player_${player.id}`}>
                  <Typography component="span">
                    {player.firstName} {player.lastName}
                    {player.handicap ? ` - ${player.handicap}` : null}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
});

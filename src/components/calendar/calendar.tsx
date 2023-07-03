import { qwikify$ } from "@builder.io/qwik-react";
import Calendar from "react-calendar";

export const QCalendar = qwikify$(Calendar, { eagerness: "hover" });

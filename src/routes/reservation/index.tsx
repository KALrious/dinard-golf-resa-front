import { $, component$ } from "@builder.io/qwik";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import { QCalendar } from "~/components/calendar/calendar";
import {
  useBookingLoader,
  type BookingForm,
  bookingSchema,
} from "~/routes/reservation/layout";

export default component$(() => {
  const [_loginForm, { Form, Field }] = useForm<BookingForm>({
    loader: useBookingLoader(),
    validate: zodForm$(bookingSchema),
  });

  const formSubmit = $(() => {
    console.log("form submitted");
  });

  return (
    <div>
      <h1 class="prose-48">Réserve Ta prochaine partie de Golf:</h1>
      <Form onSubmit$={formSubmit}>
        <Field name="date">
          {(field, props) => (
            <input type="date" {...props} value={field.value} />
          )}
        </Field>
        {/* <Field name="player">
          {(field, props) => (
            <input type="search" {...props} value={field.value} />
          )}
        </Field> */}
      </Form>
      <QCalendar />
    </div>
  );
});

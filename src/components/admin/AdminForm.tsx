type Field = {
  name: string;
  label: string;
  defaultValue?: string;
  textarea?: boolean;
  type?: string;
  required?: boolean;
  hint?: string;
};

export function AdminForm({
  action,
  fields,
  submitLabel = "Save",
}: {
  action: (formData: FormData) => void | Promise<void>;
  fields: Field[];
  submitLabel?: string;
}) {
  return (
    <form action={action} className="mt-6 space-y-4 rounded-3xl bg-white p-5 shadow-sm">
      {fields.map((field) => (
        <label key={field.name} className="block text-sm">
          {field.label}
          {field.textarea ? (
            <textarea
              name={field.name}
              required={field.required}
              defaultValue={field.defaultValue}
              rows={4}
              className="mt-1 w-full rounded-xl border border-maroon/20 px-3 py-2"
            />
          ) : (
            <input
              type={field.type || "text"}
              name={field.name}
              required={field.required}
              defaultValue={field.defaultValue}
              className="mt-1 w-full rounded-xl border border-maroon/20 px-3 py-2"
            />
          )}
          {field.hint ? <span className="mt-1 block text-xs text-muted">{field.hint}</span> : null}
        </label>
      ))}
      <button type="submit" className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-ivory">
        {submitLabel}
      </button>
    </form>
  );
}

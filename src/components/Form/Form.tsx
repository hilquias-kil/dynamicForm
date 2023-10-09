import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'

export interface FieldConfig {
  type: 'text' | 'number' | 'select'
  label: string
  options?: string[]
}

interface Props {
  config: FieldConfig[]
}

const DynamicForm: FC<Props> = ({ config }) => {
  const { handleSubmit, control, getValues } = useForm()

  const onSubmit = () => {
    alert(JSON.stringify(getValues(), null, 2))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {config.map((formField, idx) => (
        <div key={idx} className="my-10">
          <label>{formField.label}</label>
          <Controller
            name={formField.label}
            control={control}
            defaultValue=""
            render={({ field }) =>
              formField.type !== 'select' ? (
                <input
                  type={formField.type}
                  {...field}
                  className="mt-[5px] box-border w-full rounded border border-solid border-[#ccc] p-2.5"
                />
              ) : (
                <select
                  {...field}
                  className="mt-[5px] box-border w-full rounded border border-solid border-[#ccc] bg-white p-2.5"
                >
                  {formField.options!.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )
            }
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full cursor-pointer rounded border-[none] bg-cyan-500 p-2.5 text-[white] hover:bg-cyan-600"
      >
        Submit
      </button>
    </form>
  )
}

export default DynamicForm

import Form, { FieldConfig } from './Form/Form'

const config: FieldConfig[] = [
  {
    type: 'text',
    label: 'Name'
  },
  {
    type: 'number',
    label: 'Age'
  },
  {
    type: 'select',
    label: 'Favorite Color',
    options: ['Red', 'Blue', 'Green']
  }
]

function App() {
  return (
    <div className="mx-auto my-0 max-w-[500px] p-5">
      <Form config={config} />
    </div>
  )
}

export default App

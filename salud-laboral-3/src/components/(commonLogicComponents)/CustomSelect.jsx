import { useStore } from '../(completePages)/surveys/(zustand)/surveyStore'

function CustomSelectHandler({ options, value, onChange }) {
  return (
    <div className="custom-select">
      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function CustomSelect() {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]
  const setInputSelectedValue = useStore(state => state.setInputValue)
  const selectedValue = useStore(state => state.inputValue)

  return (
    <CustomSelectHandler 
      options={options}
      value={selectedValue}
      onChange={(e) => {
        const inputSelectedValue = e.target.value || 'seleccionar'
        setInputSelectedValue(inputSelectedValue)
        console.log('from zustand', selectedValue)
      }}
    />
  )
}

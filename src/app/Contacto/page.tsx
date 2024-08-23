import dynamic from "next/dynamic";

const DynamicFormulario = dynamic(() => import('../../components/Formulario'));

const Formulario: React.FC = () => {
    return <DynamicFormulario />
}

export default Formulario;
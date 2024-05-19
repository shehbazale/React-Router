export default function BAButton(props: {
    className?: string,
    btnLabel: string,
    btnClick?: any,
}) {
    const { className, btnLabel, btnClick } = props

    console.log(props)



    return <>
        <button onClick={btnClick} className={className}>{btnLabel}</button>
    </>
}

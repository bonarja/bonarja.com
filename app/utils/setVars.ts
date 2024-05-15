type VarsType = Record<string, string | number | undefined>
export const setVars = (vars: VarsType) => {
    return Object.entries(vars).reduce<VarsType>((acum, [name, value]) => {
        acum["--" + name] = value
        return acum
    }, {}) as unknown as React.CSSProperties
}
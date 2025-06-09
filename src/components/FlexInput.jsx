import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const FlexInput = ({ as = 'input', label, gap = 2, isRequired, children, ...rest }) => {

    if (children) {
        return (
            <div className="flex flex-col gap-2">
                <label className={`font-medium text-sm text-gray-600 capitalize`}>
                    {label}
                    &nbsp;
                    {isRequired && (
                        <span className="text-red-500">*</span>
                    )}
                </label>
                {children}
            </div>
        )
    }

    return (
        <div className="gap-2 flex-col flex">
            <label className={`font-medium text-sm text-muted-foreground capitalize`}>
                {label}
                &nbsp;
                {isRequired && (
                    <span className="text-red-500">*</span>
                )}
            </label>

            {as === 'textarea' && (
                <Textarea size="lg" required={isRequired} {...rest} />
            )}

            {as === 'input' && (
                <Input size="lg" {...rest} required={isRequired} />
            )}
        </div>
    )
}

export { FlexInput }
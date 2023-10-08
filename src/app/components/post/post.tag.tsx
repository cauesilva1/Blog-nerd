import { Badge } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';

interface PosrtagProps {
    title?: string;
}
export default function postTag({title}:PosrtagProps) {
    return(

        <p className="rounded-md text-orange-400 bg-orange-500/30 px-2 py-1">{title}
        </p>

        // <Badge variant="soft" radius="small" color="orange">
        //     New
        // </Badge>
    )
}
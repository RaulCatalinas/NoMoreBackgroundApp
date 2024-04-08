// React-Toastify
import { toast } from "react-toastify"

// Constants
import { GRADIENT_COLORS } from "@/constants/notifications"

// Types
import type { NotificationType } from "@/types/notifications"

interface NotifyProps {
	text: string
	type: NotificationType
}

export function notify({ text, type }: NotifyProps) {
	const { firstColor, secondColor, thirdColor } = GRADIENT_COLORS[type]

	toast(text, {
		position: "top-right",
		pauseOnHover: false,
		style: {
			background: `
				linear-gradient(
					to right, 
					${firstColor} 0%,
					${secondColor} 35%,
					${thirdColor} 100%
				)
			`,
			borderRadius: "10px",
			color: "white",
			textWrap: "pretty"
		}
	})
}

// React-Dropzone
import type { DropEvent, FileRejection } from "react-dropzone"

// Notifications
import { notify } from "@/notifications/notify"

export function useDrop() {
	function handleAcceptedDrop<T>(files: T[], event: DropEvent) {
		try {
			event.preventDefault()

			// TODO: Add logic to remove the background from the uploaded/user-selected image
			console.log("Uploading image")
		} catch (error) {
			console.error(error)

			notify({
				type: "error",
				text: "Oops, there was a problem uploading the file. Please try again later, if the problem persists please contact me."
			})
		}
	}

	function handleRejectedDrop(
		fileRejections: FileRejection[],
		event: DropEvent
	) {
		event.preventDefault()

		for (const { file: fileRejection } of fileRejections) {
			notify({
				type: "error",
				text: `The file ${fileRejection.name} isn't a valid image`
			})
		}
	}

	return { handleAcceptedDrop, handleRejectedDrop }
}

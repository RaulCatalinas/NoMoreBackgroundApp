// CSS
import styles from "@/css/dropzone.module.css"

// React-Dropzone
import { useDropzone } from "react-dropzone"

// Hooks
import { useDrop } from "@/hooks/useDrop"

export default function Dropzone() {
	const { handleAcceptedDrop, handleRejectedDrop } = useDrop()

	const { getInputProps, getRootProps, isDragReject, isDragAccept } =
		useDropzone({
			accept: { "image/*": [] },
			onDropAccepted: handleAcceptedDrop,
			onDropRejected: handleRejectedDrop
		})

	return (
		<div
			{...getRootProps({
				className: `
          ${styles.dropzone}
          ${isDragReject ? styles["invalid-file"] : ""}
          ${isDragAccept ? styles["valid-file"] : ""}
        `
			})}
		>
			<input {...getInputProps()} />
			<p>Drag & drop some images here, or click to select images</p>
		</div>
	)
}

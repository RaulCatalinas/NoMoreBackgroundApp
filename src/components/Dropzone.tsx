// CSS
import styles from "@/css/dropzone.module.css"

// React-Dropzone
import { useDropzone } from "react-dropzone"

export default function Dropzone() {
	const { getInputProps, getRootProps, isDragReject, isDragAccept } =
		useDropzone({ accept: { "image/*": [] } })

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

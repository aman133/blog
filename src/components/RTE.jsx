
import {Editor} from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form"
export default function RTE({name,label,control,defaultValue=""}) {
  return (
    <div className="w-full">
    {label && <label className="inline-block mb-1 pl-1">{label}</label>}
    <Controller
    name={name || "content"}
    control={control}
    render={({field:{onChange}})=>(
    <Editor
        initialValue={defaultValue}
        init={
            {initialValue:defaultValue,
            branding:false,
            height:500,
            menubar:true,
            plugins:[
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "print",
                "preview",
                "anchor",
                "searchreplace",
                "virtualblocks",
                "code",
                "fullscreen",
                "insertdatatime",
                "media",
                "table",
                "paste",
                "code",
                "help",
                "wordcount"],
            toolbar: "undo redo | blocks | image | bold italic forecolor |  alignleft aligncenter alignright alignjustify |  billist numlist outdent indent | removeformat | help",
            content_style: "body { font-family:Helvetica,Arial, san-serif; font-size:14px} "
            }
        }
        onEditorChange={onChange}
    />
    )}

    />
    </div>
  )
}

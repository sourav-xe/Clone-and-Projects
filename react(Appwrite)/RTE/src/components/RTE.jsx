import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="wd64et6p7kimtr4o5ty4xqnpiid4se623wijgd7ggxcwq63q"
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "image", "advlist", "autolink", "lists", "link", "charmap", "preview",
                "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime",
                "media", "table", "wordcount", "help"
              ],
              toolbar:
                "undo redo | bold italic | alignleft aligncenter alignright | bullist numlist | removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default RTE;

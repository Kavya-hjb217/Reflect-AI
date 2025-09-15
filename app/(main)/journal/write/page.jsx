"use client";

import dynamic from "next/dynamic";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import "react-quill-new/dist/quill.snow.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { journalSchema } from "@/app/lib/schema";
import { BarLoader } from "react-spinners";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { getMoodById, MOODS } from "@/app/lib/moods";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const JournalEntryPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: zodResolver(journalSchema),
    defaultValues: {
      title: "",
      content: "",
      mood: "",
      collectionId: "",
    },
  });
  const isLoading = false;

  return (
    <div className="py-6">
      <form className="space-y-2 mx-auto">
        <h1 className="text-5xl md:text-6xl gradient-title">
          What&apos;s on your mind?
        </h1>
        {isLoading && <BarLoader color="orange" width={"100%"} />}

        <div className="space-y-2">
          <label className="text-sm font-medium"> </label>
          <Input
            disabled={isLoading}
            {...register("title")}
            placeholder="Give your entry a title..."
            className={`py-5 md:text-md ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            How are you feeling today?
          </label>
          <Controller
            name="mood"
            control={control}
            render={(field) => {
              return (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={errors.mood ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Choose your mood" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="max-h-60 overflow-y-auto"
                  >
                    {Object.values(MOODS).map((mood) => {
                      return (
                        <SelectItem key={mood.id} value={mood.id}>
                          <span className="flex items-center gap-2">
                            {mood.emoji} {mood.label}
                          </span>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              );
            }}
          />
          {errors.mood && (
            <p className="text-sm text-red-500">{errors.mood.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {getMoodById(getValues("mood"))?.prompt ?? "Write your thoughts..."}
          </label>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <ReactQuill
                readOnly={isLoading}
                theme="snow"
                value={field.value}
                onChange={field.onChange}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquote", "code-block"],
                    ["link"],
                    ["clean"],
                  ],
                }}
              />
            )}
          />

          {errors.content && (
            <p className="text-sm text-red-500">{errors.content.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Add to Collection (optional)
          </label>
          {/* <Controller
            name="content"
            control={control}
            render={({ field }) => (
              
              
            )}
          /> */}

          {errors.collectionId && (
            <p className="text-sm text-red-500">{errors.collectionId.message}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default JournalEntryPage;

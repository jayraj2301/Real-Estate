import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { propertySchema } from "@/lib/validation";
import FileUploader from "../shared/FileUploader";
import { useToast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../shared/Loader";
import { useCreatePost } from "@/lib/react-query/queries";

function PostForm() {

  const {toast} = useToast()
  const navigate = useNavigate()
  // const [isLoading, setIsLoading] = useState(false)

  const {mutateAsync: createPost, isPending: isLoading} = useCreatePost()

  const form = useForm<z.infer<typeof propertySchema>>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      propertyTitle: "",
      locality: "",
      price1: 0,
      price2: 0,
      typo: "",
      bedrooms: 0,
      typeOfProperty: "",
      image1: [],
      image2: [],
    },
  });

  // 2. Define a submit handler.
  const handlePost = async (values: z.infer<typeof propertySchema>) => {
    const post = await createPost({...values,image1:values.image1[0],image2:values.image2[0]})

    if (!post) {
      toast({
        title: `Create post failed. Please try again.`,
      });
    }
    // console.log(values);
    navigate("/")
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handlePost)}
        className="flex flex-col gap-9 w-full max-w-5xl"
      >
        <FormField
          control={form.control}
          name="propertyTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="title"
                  {...field}
                  className="shad-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="locality"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="shad-input"
                  placeholder="Apartment-no , society, area , city ,...."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between gap-2">
          <FormField
            control={form.control}
            name="price1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price1</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="price1"
                    {...field}
                    className="shad-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price2</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="price2"
                    {...field}
                    className="shad-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="bedrooms"
                    {...field}
                    className="shad-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="typo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="rent , sell"
                  {...field}
                  className="shad-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="typeOfProperty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type Of Property</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Flat , Apartment , Tenament ..."
                  {...field}
                  className="shad-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Photos</FormLabel>
              <FormControl>
                <FileUploader fieldChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Photos</FormLabel>
              <FormControl>
                <FileUploader fieldChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="button w-1/4 ml-auto" disabled={isLoading} >
        {isLoading? <div className="flex justify-center items-center gap-2"><Loader />Loading...</div>: "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default PostForm;

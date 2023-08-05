import * as z from "zod";
import { formSchema } from "./constants";
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // try {
    //   const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
    //   const newMessages = [...messages, userMessage];

    //   const response = await axios.post('/api/conversation', { messages: newMessages });
    //   setMessages((current) => [...current, userMessage, response.data]);

    //   form.reset();
    // } catch (error: any) {
    //   if (error?.response?.status === 403) {
    //     proModal.onOpen();
    //   } else {
    //     toast.error("Something went wrong.");
    //   }
    // } finally {
    //   router.refresh();
    // }
    console.log(values);
  };

  return (
    <>
      <Heading
        title="Conversation"
        description="Our Most Advanced conversation"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </>
  );
};

export default ConversationPage;

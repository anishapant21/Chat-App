import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

const ChatLoading: React.FC = () => {
  return (
    <Stack>
      {[...Array(12)].map((_, index) => (
        <Skeleton key={index} height="45px" />
      ))}
    </Stack>
  );
};

export default ChatLoading;

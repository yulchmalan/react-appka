import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY={1}>
          <HStack>
            <Skeleton boxSize="32px" borderRadius={8} />
            <SkeletonText
              noOfLines={1}
              width={"calc(100% - 36px)"}
            ></SkeletonText>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;

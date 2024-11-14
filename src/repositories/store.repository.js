
export const getAllStoreReviews = async (storeId, cursor = 0) => {
    const reviews = await prisma.userStoreReview.findMany({
      select: {
        id: true,
        content: true,
        storeId: true,
        userId: true,
        store: true,
        user: true,
      },
      where: {
        storeId: storeId,
        id: { gt: cursor }, // 커서를 기준으로 ID가 커서보다 큰 리뷰들 가져옴
      },
      orderBy: { id: "asc" }, // ID 기준으로 오름차순 정렬
      take: 5, // 한 번에 5개의 리뷰만 가져옴
    });
  
    return reviews;
  };
  
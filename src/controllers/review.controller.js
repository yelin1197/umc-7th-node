import * as reviewService from '../services/review.service.js';

export const getUserReviews = async (req, res) => {
   /*
    #swagger.summary = '사용자가 작성한 리뷰 조회 API';
    #swagger.parameters['userId'] = {
      in: 'path',
      required: true,
      description: '사용자 ID',
      schema: { type: 'integer', example: 123 }
    };
    #swagger.parameters['restaurantId'] = {
      in: 'query',
      required: false,
      description: '식당 ID (필터링에 사용)',
      schema: { type: 'integer', example: 789 }
    };
    #swagger.responses[200] = {
      description: "리뷰 조회 성공 응답",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number", example: 1 },
                content: { type: "string", example: "리뷰 내용" },
                rating: { type: "number", example: 4.5 },
                restaurant: {
                  type: "object",
                  properties: {
                    id: { type: "number", example: 789 },
                    name: { type: "string", example: "맛있는 식당" }
                  }
                },
                user: {
                  type: "object",
                  properties: {
                    id: { type: "number", example: 123 },
                    name: { type: "string", example: "사용자 이름" }
                  }
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[500] = {
      description: "서버 오류로 인해 리뷰 조회 실패",
      schema: {
        type: "object",
        properties: {
          error: { type: "string", example: "Failed to fetch reviews." }
        }
      }
    };
  */
  const { userId } = req.params;
  const { restaurantId } = req.query;

  try {
    const reviews = await reviewService.getUserReviews(userId, restaurantId);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {Blog, Prisma} from "@prisma/client";
import {PaginationQueryDto} from "../common/dto/pagination-query.dto";

@Injectable()
export class BlogRepository {
    private readonly _prisma;

    constructor(private prisma: PrismaService) {
        this._prisma = prisma;
    }

    async blog(
        blogWhereUniqueInput: Prisma.BlogWhereUniqueInput,
    ): Promise<Blog | null> {
        return this.prisma.blog.findUnique({
            where: blogWhereUniqueInput,
        });
    }


    async blogs(params: PaginationQueryDto): Promise<Blog[]> {
        const {skip, take, cursor, where, orderBy} = params;
        return this.prisma.blog.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
}
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    username: string;

    @Column()
    tgId: number;

    @Column()
    chatId: number;

    @Column()
    mail: string;

    @Column()
    status: number; // 状态： 0 未处理 1 已注册 2 忽略

    @Column()
    type: number; // 类型： 1 视频库 2 书籍库 3 音频库

    @Column({ nullable: true, type: 'text' })
    extra?: string;

    @Column({
        name: "createdAt",
        type: 'int',
        default: () => Date.now(),
    })
    createdAt?: Date;

}

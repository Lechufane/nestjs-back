import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './player.entity';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayersService {

    
    constructor(@InjectRepository(Player) private playerRepository: Repository<Player>){ }

    
    createPlayer = (player: CreatePlayerDto) => {
        const newPlayer = this.playerRepository.create(player)
        this.playerRepository.save(newPlayer)
    }


}

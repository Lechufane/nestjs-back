import { Controller, Post, Body } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {


    constructor(private playerService: PlayersService){}


    @Post('createNew')
    createPlayer(@Body() newPlayer: CreatePlayerDto){
        this.playerService.createPlayer(newPlayer)
    }


}

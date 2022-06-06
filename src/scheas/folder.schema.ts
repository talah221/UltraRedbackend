import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type FolderDocument = Folder & Document;

@Schema()
export class Folder {
  @Prop()
  name: string;
  @Prop()
  fatherFolder: Types.ObjectId;
  @Prop()
  filesAndFoldersIds: Types.ObjectId[];
}

export const FolderSchema = SchemaFactory.createForClass(Folder);
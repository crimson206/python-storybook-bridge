from python_storybook.core import StoryManager
## from typing import Any


def minus(num1: float, num2: float) -> float:
    return num1-num2


story_manager = StoryManager(title='Deeper')

story_manager.create_story(minus)

story_manager.get_stories()[0]
